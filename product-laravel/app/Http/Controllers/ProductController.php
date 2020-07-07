<?php

namespace App\Http\Controllers;

use App\Products;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    protected $product;

    public function __construct(Products $Products)
    {
        $this->product = $Products;
    }

    function getAll()
    {
        $products = $this->product->all();
        return response()->json($products);
    }
    function create(Request $request)
    {
        $product = new Products();
        $product->name = $request->name;
        $product->price = $request->price;
        $product->star = $request->star;
        $product->save();
    }
    function findById($id) {
        $product = $this->product->find($id);
        return response()->json($product);
    }
    function update(Request $request, $id)
    {
        $product = $this->product->find($id);
        $product->name = $request->name;
        $product->price = $request->price;
        $product->star = $request->star;
        $product->save();
    }
    function delete($id)
    {
        $product = $this->product->find($id);
        $product->delete();
    }
    function searchProduct($keyWord)
    {
        $products = $this->product->query()
            ->where('name', 'LIKE', "%$keyWord%")
            ->get();
        return response()->json($products);
    }
}
