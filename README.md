# Decoupled webapp prototype using Contenta CMS + Sapper

🐉 WIP experiment. See [local dev stack](https://github.com/Paulmicha/decoupled-prototype) repo.

Note : all commands below use aliases defined in dev stack. To load them in current terminal session, you may source the bootstrap shell include from project docroot :

```sh
. cwt/bootstrap.sh
```

## Usage

### Initial setup

See [local dev stack](https://github.com/Paulmicha/decoupled-prototype) repo.

### Compile (build) for local dev

```sh
# Run from project docroot ($PROJECT_DOCROOT). See local dev stack.
make start
# Or :
cwt/instance/start.sh
```

Alternatively, if local stack services are already running :

```sh
npm run dev
```

## File structure

```txt
$PROJECT_DOCROOT/app/       ← Application dir (this repo, $APP_GIT_WORK_TREE)
  ├── backend/              ← Contenta CMS Drupal distro
  │   ├── keys/             ← RSA keys for OAuth2 session handling from Node JS
  │   ├── vendor/           ← Third-party dependencies managed by Composer
  │   ├── web/              ← Drupal webserver entry point ($APP_DOCROOT)
  │   └── ...
  └── frontend/             ← Sapper (Svelte) Node JS application
      ├── cypress/          ← Browser-based testing framework
      ├── node_modules/     ← Third-party dependencies managed by NPM
      ├── src/
      │   ├── components/   ← Svelte UI components
      │   ├── global_css/   ← Global (unscoped) styles
      │   ├── routes/       ← URL declarations + path-specific implementations
      │   ├── stores/       ← Shareable & observable data for components & routes
      │   ├── client.js     ← Client-side app entry point
      │   ├── server.js     ← Node JS webserver entry point: SSR, middlewares...
      │   ├── template.html ← Root HTML template
      │   └── ...
      ├── static/           ← Client-side compiled or manually added assets
      ├── rollup.config.js    ← Compilation setup (varies by instance type)
      ├── tailwind.config.js  ← Global styles extensions & overrides (design tokens)
      └── ...
```

## [Archive] install notes

### Frontend

Project template instanciation :

```sh
npx degit "sveltejs/sapper-template#rollup" .
```

### Backend

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
  --db-url="$DB_DRIVER://$DB_USER:$DB_PASS@$DB_HOST:$DB_PORT/$DB_NAME" \
  --site-mail='site@decoupled-prototype.io' \
  --account-mail='admin@decoupled-prototype.io' \
  --site-name='Decoupled prototype' \
  --account-name='admin' \
  --account-pass='admin'
```
