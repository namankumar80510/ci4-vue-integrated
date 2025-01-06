<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/api/home', 'Home::api');

// route any other requests to the frontend
$routes->get('/(:any)', 'Home::frontend/$1');
