<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::prefix('/products')->group(function (){
    Route::get('', 'ProductController@getAll')->name('products.list');
    Route::post('/create', 'ProductController@create')->name('products.create');
    Route::get('{id}', 'ProductController@findById')->name('products.find');
    Route::put('{id}/update', 'ProductController@update')->name('products.update');
    Route::delete('{id}/delete', 'ProductController@delete')->name('products.delete');
    Route::get('search/name={keyWord}', 'ProductController@searchProduct')->name('products.search');
});
