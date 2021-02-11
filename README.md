# MyShop
**Description:**

MyShop is a simple Symfony application between Shop and Products

**Requirements:**
- [Symfony](https://symfony.com/doc/current/setup.html)
- [Composer]([https://link](https://getcomposer.org/doc/00-intro.md#installation-linux-unix-macos))


#
To install dependencies of my project just run:
```shell
composer install
```

**To make migration (database) run:**
```shell
php bin/console doctrine:database:create
```
After that just run:
```shell
php bin/console doctrine:migrations:migrate
```
You have new database with my structs !
#
Just run:
```shell
symfony server:start
```

And go To:
- http://127.0.0.1:8000/shop/
- http://127.0.0.1:8000/product/
- http://127.0.0.1:8000/api/
- http://127.0.0.1:8000/api/graphql

**Enjoy !**