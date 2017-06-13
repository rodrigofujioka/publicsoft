<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Job extends Model
{
     protected $table = 'job';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'titulo', 'descricao', 'data_inicio', 'data_fim'
    ];

    public function candidates()
    {
        return $this->belongsToMany(Candidate::class, 'candidate_check_job', 'job_id', 'candidate_id');
    }

}
