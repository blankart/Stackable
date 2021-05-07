<?php
class SampleTest extends WP_UnitTestCase {

	/** @test **/
	function test_wordpress_and_plugin_are_loaded() {
		$this->assertTrue( function_exists( 'do_action' ) );
		$this->assertTrue( function_exists( 'stackable_php_requirement_activation_check' ) );
	}
}
