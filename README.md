[![MyShop](img/MyShop.png)](https://github.com/banner-maker/banner-maker)

**Description:**

MyShop is a simple Symfony application between Shops and Products with api documentation and admin plateform

**Requirements:**

- [Symfony](https://symfony.com/doc/current/setup.html)
- [Composer](https://getcomposer.org/doc/00-intro.md#installation-linux-unix-macos)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/#debian-stable)

#

To clone my project do:

```shell
git clone https://github.com/Zouclar/MyShop.git
```

After run `cd MyShop`

To install dependencies of my project just run:

```shell
composer install
```

![warning](https://img.icons8.com/emoji/20/warning-emoji.png) <ins>**You have to rename your ".env.example" into ".env" and customize to correspond to your database, just report to the [doc](https://symfony.com/doc/current/configuration.html#config-dot-env)**</ins> ![warning](https://img.icons8.com/emoji/20/warning-emoji.png)

**To have my database structure run:**

```shell
php bin/console doctrine:database:create
```

and

```shell
php bin/console doctrine:schema:create
```

You have new database with my structs !

Now to populate your DB, Run:

```shell
php bin/console doctrine:fixtures:load
```

It's done, now just run:

```shell
symfony server:start
```

#

**To Administration:**

Go to : `cd my-admin/` Folder and run:

```shell
yarn install
```

After That just run:

```shell
yarn start
```

[Here,](https://github.com/Zouclar/MyShop/tree/master/my-admin/README.md) you can have all commands allowed in my-admin project

#

And go To:

<ins>Application:</ins>

- http://localhost:8000/
- http://localhost:8000/shop/
- http://localhost:8000/product/
- http://localhost:8000/api/
- http://localhost:8000/api/graphql

<ins>Administration:<ins>

- http://localhost:3000/

**Enjoy !**
