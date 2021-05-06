<?php
use \PHPUnit\Framework\TestCase;

final class SampleTest extends TestCase {
	/** @test **/
	public function sample_test_1() {
		$this->assertEquals( 1, 1 );
	}
}
