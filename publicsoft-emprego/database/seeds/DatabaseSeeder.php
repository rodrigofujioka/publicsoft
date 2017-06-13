<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert(
            array(
                array(
                    'id' => '1',
                    'name' => 'Júlio Barbosa de Oliveira',
                    'email' => 'julio.barbosa.15@gmail.com',
                    'password' => '$2y$10$7NiEMN8l0aEKGWxUqmJCTO9A.7rDUvDpAmW8YfBfCfL7BDxExIAB.',
                    'remember_token' => 'Ajp0sDpMrvz1Zpi2PmalhPQUr7qwISboOuNAVydNu4V0muGOmJ33ieANnBy5',
                    'created_at' => '2017-06-05 20:18:35',
                    'updated_at' => '2017-06-05 20:18:35',
                    )
            ));

        DB::table('oauth_clients')->insert(
            array(
                array(
                    'id' => '1',
                    'user_id' => null,
                    'name' => 'Laravel Personal Access Client',
                    'secreat' => '0aSZtqZ4sRjKimMTCByKpgPaVG80zmVF2VYwCWbh',
                    'redirect' => 'http://localhost',
                    'personal_access_client' => '1',
                    'password_client' => '0',
                    'revoked' => '0',
                    'created_at' => '2017-06-05 19:24:29',
                    'updated_at' => '2017-06-05 19:24:29',
                ),
                array(
                    'id' => '2',
                    'user_id' => null,
                    'name' => 'Laravel Personal Access Client',
                    'secreat' => '4GI1QTdfDO5Ban6NNQSLEvDbteKQbywPWTT7YKGy',
                    'redirect' => 'http://localhost',
                    'personal_access_client' => '0',
                    'password_client' => '1',
                    'revoked' => '0',
                    'created_at' => '2017-06-05 19:24:29',
                    'updated_at' => '2017-06-05 19:24:29',
                )
            ));

        DB::table('oauth_access_tokens')->insert(
            array(
                array(
                    'id' => '55e36d1470c08b4353f0773e04d9d2df034447a841815996f8c262e754d58e1880fb0a9896a1c0ad',
                    'user_id' => 1,
                    'client_id' => 2,
                    'name' => null,
                    'scopes' => '[]',
                    'revoked' => '0',
                    'created_at' => '2017-06-05 19:24:29',
                    'updated_at' => '2017-06-05 19:24:29',
                    'expires_at' => '2018-06-05 19:24:29',
                )
            ));

        DB::table('oauth_personal_access_clients')->insert(
            array(
                array(
                    'id' => '1',
                    'client_id' => 1,
                    'created_at' => '2017-06-05 19:24:29',
                    'updated_at' => '2017-06-05 19:24:29',
                )
            ));


        DB::table('oauth_refresh_tokens')->insert(
            array(
                array(
                    'id' => 'c2db0a15e02b8e14be491442085dcf01a69f1db1503747132fe8fdeafc6e45d34db78be617d61c60',
                    'access_token_id' => '55e36d1470c08b4353f0773e04d9d2df034447a841815996f8c262e754d58e1880fb0a9896a1c0ad',
                    'revoked' => '0',
                    'expires_at' => '2018-06-05 19:24:29',
                )
            ));
    }
}
