<?php

namespace App\Http\Controllers\Api;

use App\Candidate;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class CandidateController extends Controller
{

    protected $model;
    protected $relatioships = ['skills', 'workexperiences'];

    public function __construct(Candidate $model)
    {
        $this->model = $model;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //
        $limit = $request->all()['limit'] ?? 20;
        $result = $this->model->paginate($limit);

        return response()->json($result);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $candidate = $this->model->create($request->all());
        $candidate->skills()->create([
            'habilidade' => $request->input('habilidade')
        ]);

        if ($request->input('nome_empresa')) {
            $candidate->workexperiences()->create([
                'nome_empresa' => $request->input('nome_empresa'),
                'cargo' => $request->input('cargo'),
                'descricao' => $request->input('descricao'),
                'data_inicio' => $request->input('data_inicio'),
                'data_fim' => $request->input('data_fim') ?? null
            ]);
        }
        $candidate->jobs()->attach([$request->input('job_id')]);

        $title = 'PublicSoft Emprego';
        $content = 'Cadastrado com Sucesso no PublicSoft Emprego!';
        $email = $request->input('email');

        $data = ['title' => $title, 'content' => $content, 'to' => $email];

        Mail::send('emails.view', $data, function ($message) {});

        return response()->json('Cadastrado com sucesso!');
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $result = $this->model->with(['skills', 'workexperiences', 'jobs'])->findOrFail($id);

        return response()->json($result);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $result = $this->model->findOrFail($id);
        $result->update($request->all());

        return response()->json($result);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $result = $this->model->findOrFail($id);
        $result->delete();

        return response()->json($result);
    }

}
