<?php
class PluginTest extends WP_UnitTestCase {

	/**
	 * Test core Stackable functions if exists.
	 */
	function test_wordpress_and_stackable_are_loaded() {
		$this->assertTrue( function_exists( 'do_action' ) );
		$this->assertTrue( function_exists( 'add_filter' ) );
		$this->assertTrue( function_exists( 'apply_filters' ) );
		$this->assertTrue( function_exists( 'stackable_php_requirement_activation_check' ) );
		$this->assertTrue( function_exists( 'stackable_version_upgrade_check' ) );
		$this->assertTrue( function_exists( 'stackable_notice_gutenberg_plugin_activated' ) );
		$this->assertTrue( function_exists( 'stackable_notice_gutenberg_plugin_ignore' ) );
	}
}
