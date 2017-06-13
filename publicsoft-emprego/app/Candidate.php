<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Candidate extends Model
{
    protected $table = 'candidate';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'nome', 'cpf', 'data_nascimento', 'email', 'telefone', 'rua', 'complemento', 'bairro', 'cidade', 'uf'
    ];

    public function skills()
    {
        return $this->hasMany(Skill::class, 'candidate_id');
    }

    public function workexperiences()
    {
        return $this->hasMany(WorkExperience::class, 'candidate_id');
    }

    public function jobs()
    {
        return $this->belongsToMany(Job::class,'candidate_check_job','candidate_id', 'job_id');
    }
}
