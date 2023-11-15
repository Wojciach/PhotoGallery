<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit88cb6d0b63f23f0262cb8cb5b3157817
{
    public static $files = array (
        'd6a177851bedd1cc1805e4770bcab31b' => __DIR__ . '/../..' . '/getImagesNamesFrom.php',
    );

    public static $prefixLengthsPsr4 = array (
        'W' => 
        array (
            'Wojciach\\PhotoGallery\\' => 22,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Wojciach\\PhotoGallery\\' => 
        array (
            0 => __DIR__ . '/../..' . '/',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit88cb6d0b63f23f0262cb8cb5b3157817::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit88cb6d0b63f23f0262cb8cb5b3157817::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit88cb6d0b63f23f0262cb8cb5b3157817::$classMap;

        }, null, ClassLoader::class);
    }
}
