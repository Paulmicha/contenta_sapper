# Decoupled webapp prototype using Contenta CMS + Sapper

🐉 WIP experiment. See [local dev stack](https://github.com/Paulmicha/decoupled-prototype) repo.

Note : all commands below use aliases defined in dev stack. To load them in current terminal session, you may source the bootstrap shell include from project docroot :

```sh
. cwt/bootstrap
```

## Frontend install notes

Project template instanciation :

```sh
npx degit "sveltejs/sapper-template#rollup" .
```

## Backend install notes

Project template instanciation :

```sh
composer create-project \
  contentacms/contenta-jsonapi-project \
  /var/www/html \
  --stability dev --no-interaction --remove-vcs --prefer-dist
```

Local instance installation :

```sh
drush site-install contenta_jsonapi --verbose --yes \
  --root='/var/www/html/web' \
  --db-url="$DB_DRIVER://$DB_USER:$DB_PASSWORD@$DB_HOST:$DB_PORT/$DB_NAME" \
  --site-mail='site@decoupled-prototype.io' \
  --account-mail='admin@decoupled-prototype.io' \
  --site-name='Decoupled prototype' \
  --account-name='admin' \
  --account-pass='admin'
```
