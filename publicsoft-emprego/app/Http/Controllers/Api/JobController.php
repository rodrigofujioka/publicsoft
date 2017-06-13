<?php

namespace App\Http\Controllers\Api;

use App\Job;
use App\Http\Controllers\Controller;

class JobController extends Controller
{
    use \App\Http\Controllers\ApiControllerTrait;

    protected $model;
    protected $relatioships = ['candidates'];

    public function __construct(Job $model)
    {
        $this->model = $model;
    }

}
