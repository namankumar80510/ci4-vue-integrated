<!DOCTYPE html>
<html>

<head>
    <title>Vue + CI4</title>
    <base href="<?= base_url() ?>">
    <?php
    // Include Vite HMR client in development
    if (ENVIRONMENT === 'development'): ?>
        <script type="module" src="http://localhost:5173/@vite/client"></script>
        <script type="module" src="http://localhost:5173/src/main.js"></script>
    <?php else:
        // Include production assets
        include(FCPATH . 'dist/manifest.json');
    ?>
        <script type="module" src="<?= base_url('dist/' . $manifest['src/main.js']['file']) ?>"></script>
        <link rel="stylesheet" href="<?= base_url('dist/' . $manifest['src/main.js']['css'][0]) ?>">
    <?php endif; ?>
</head>

<body>
    <div id="app"></div>
</body>

</html>