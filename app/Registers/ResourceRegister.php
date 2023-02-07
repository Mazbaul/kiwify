<?php


namespace App\Registers;

use Illuminate\Routing\ResourceRegistrar as OriginalRegistrar;

class ResourceRegister extends OriginalRegistrar
{
    protected $resourceDefaults = ['index', 'create', 'store', 'show', 'edit', 'update', 'destroy', 'data'];

    protected function addResourceData($name, $base, $controller, $options)
    {
        $uri = $this->getResourceUri($name) . '/status';
        $action = $this->getResourceAction($name, $controller, 'status', $options);
        return $this->router->post($uri, $action);
    }
}
