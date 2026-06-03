<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class HealthController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        return response()->json([
            'message' => 'Health check successful',
            'version' => '1.0.0',
            'status' => 'ok',
            'timestamp' => now(),
            'uptime' => now()->diffForHumans(),
            'memory' => memory_get_usage(),
            'memory_limit' => ini_get('memory_limit'),
            'php_version' => PHP_VERSION,
            'laravel_version' => app()->version(),
            'database' => config('database.default'),
            'database_connection' => config('database.connections.' . config('database.default') . '.host'),
        ]);
    }
}
