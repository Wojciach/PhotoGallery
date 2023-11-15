<?php
require_once "./vendor/autoload.php";

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Accept, Origin, Authorization');
header('Content-Type: application/json');

use function Wojciach\PhotoGallery\getImagesNamesFrom;

getImagesNamesFrom("../images/");
