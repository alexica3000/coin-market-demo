<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreCoinRequest extends FormRequest
{
    public function authorize() : bool
    {
        return true;
    }

    public function rules() : array
    {
        return [
            'name'        => 'required|string|max:200',
            'description' => 'required|string',
            'author'      => 'required|string|max:50',
            'country'     => 'required|string|max:50',
        ];
    }
}
