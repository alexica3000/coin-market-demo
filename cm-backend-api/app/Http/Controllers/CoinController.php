<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCoinRequest;
use App\Http\Resources\CoinResource;
use App\Models\Coin;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\ResourceCollection;

class CoinController extends Controller
{
    public function index() : ResourceCollection
    {
        return CoinResource::collection(Coin::query()->latest()->get());
    }

    public function store(StoreCoinRequest $request) : CoinResource
    {
        $coin = Coin::query()->create($request->validated());

        return new CoinResource($coin);
    }

    public function show(Coin $coin) : CoinResource
    {
        return new CoinResource($coin);
    }

    public function update(StoreCoinRequest $request, Coin $coin) : CoinResource
    {
        $coin->update($request->validated());

        return new CoinResource($coin);
    }

    public function destroy(Coin $coin) : JsonResponse
    {
        $coin->delete();

        return response()->json(['status' => true, 'message' => 'The coin has been deleted.']);
    }
}
