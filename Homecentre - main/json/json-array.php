<?php

$arr = array(
	'headboard' => array(
		'straight' => array(
			'desk_img' => '/images/headboard/Straight/HB_Black_Straight.jpg?v1',
			'item_code' => '',
		),
	),
	'base' => array(
		'base-drawer' => array(
			'desk_img' => '/images/HB-Base-Bench/Desk/Black/Base-With-Storage.png',
			'mob_img' => '/images/HB-Base-Bench/Mob/Black/Base-With-Storage.png',
			'item_code' => '163480069',
		),
		'only-base' => array(
			'desk_img' => '/images/HB-Base-Bench/Desk/Black/Base-Without-Storag.png',
			'mob_img' => '/images/HB-Base-Bench/Mob/Black/Base-Without-Storag.png',
			'item_code' => '162824345',
		),
	),
	'bench' => array(
		'desk_img' => '/images/HB-Base-Bench/Desk/Black/Bench.png',
		'mob_img' => '/images/HB-Base-Bench/Mob/Black/Bench.png',
		'item_code' => '162501789',
	),
);

echo json_encode($arr);
