<?php

namespace App\DataFixtures;

use App\Entity\Product;
use App\Entity\Shop;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Faker\Factory;
use App\Repository\ShopRepository;

class ProductFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager)
    {
        $this->faker = Factory::create();
        
        for ($i = 0; $i < 100; $i++) {
                $product = new Product();            
                $product->setName($this->faker->word);
                $product->setDescription($this->faker->sentence($nbWords = 15, $variableNbWords = true));
                $product->setStock($this->faker->numberBetween($min = 2, $max = 599));
                $product->setShop($this->getReference(ShopFixtures::SHOP.$this->faker->numberBetween($min = 0, $max = 99)));

                $manager->persist($product);

        }
        $manager->flush();
    }

    public function getDependencies()
    {
        return [
            ShopFixtures::class,
        ];
    }
}
