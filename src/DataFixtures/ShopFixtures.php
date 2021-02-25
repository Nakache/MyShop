<?php

namespace App\DataFixtures;

use App\Entity\Shop;
use Faker\Factory;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class ShopFixtures extends Fixture
{
    protected $faker;

    public function load(ObjectManager $manager)
    {
        $this->faker = Factory::create();

        for ($i = 0; $i < 100; $i++) {
            $shop = new Shop();            
            $shop->setName($this->faker->company);
            $shop->setSiren($this->faker->randomNumber($nbDigits = 9, $strict = false));
            $shop->setCapacity($this->faker->numberBetween($min = 2, $max = 9999));
            $manager->persist($shop);
        }
        $manager->flush();
    
    }
}
