<?php

namespace App\Controllers;

class Home extends BaseController
{

    public function api()
    {
        return $this->response->setJSON(['message' => 'Welcome to Homepage!']);
    }

    public function frontend($uri = null): string
    {
        return view('frontend/index');
    }
}
