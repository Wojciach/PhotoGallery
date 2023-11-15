<?php
namespace Wojciach\PhotoGallery;


function getImagesNamesFrom($directory)
{

    $pattern = $directory . '*.{jpg,jpeg,png,gif}';

    // Use glob to get all image files
    $images = glob($pattern, GLOB_BRACE);

    // Use array_map and basename to get the file names
    $fileNames = array_map('basename', $images);    

    echo json_encode($fileNames);
}