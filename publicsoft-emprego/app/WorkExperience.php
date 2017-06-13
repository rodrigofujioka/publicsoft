<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class WorkExperience extends Model
{
    protected $table = 'work_experience';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'nome_empresa', 'cargo', 'descricao', 'data_inicio', 'data_fim','candidate_id'
    ];

    public function skills()
    {
        return $this->belongsTo(Candidate::class, 'candidate_id');
    }
}
