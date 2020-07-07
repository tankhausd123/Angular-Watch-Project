<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class Products extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('products')->insert([
           'name'=>'Rolex Datejust 2019',
            'price'=>287700000,
            'star'=>5
        ]);
        DB::table('products')->insert([
            'name'=>'Orient',
            'price'=>6300000,
            'star'=>3
        ]);
        DB::table('products')->insert([
            'name'=>'Patek Philippe Nautilus',
            'price'=>550000000,
            'star'=>5
        ]);
        DB::table('products')->insert([
            'name'=>'Hublot Big Bang',
            'price'=>202500000,
            'star'=>4
        ]);
        DB::table('products')->insert([
            'name'=>'Seiko 5',
            'price'=>3800000,
            'star'=>2
        ]);
    }
}
