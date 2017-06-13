<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Skill extends Model
{
    protected $table = 'skill';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'habilidade','candidate_id'
    ];


    public function candidate()
    {
        return $this->belongsTo(Candidate::class, 'candidate_id');
    }
}
