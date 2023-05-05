<?php

declare(strict_types=1);

use PHPUnit\Framework\TestCase;

final class YourTestClass extends TestCase
{
    public function testRegister(): void
    {
        // Arrange
        $user = [
            'name' => 'test',
            'lastname' => 'test',
            'username' => 'test',
            'password' => md5('test'),
            'email' => 'test@test.com',
            'status' => 0,
            'created_date' => date('Y-m-d H:i:s'),
        ];

        $databaseMock = $this->createMock(Database::class);
        $databaseMock->method('register')
            ->willReturn(1);

        $databaseMock->method('generateConfirmCode')
            ->willReturn(12345);

        $jwtMock = $this->createMock(Jwt::class);
        $jwtMock->method('generate_jwt')
            ->willReturn('jwt-token');

        // Act
        $_SERVER['REQUEST_URI'] = '/api/register';
        $_SERVER['REQUEST_METHOD'] = 'POST';
        $_POST = $user;

        $this->expectOutputString('{"status":"jwt-token"}');

        register();

        // Assert
        $this->assertTrue(true);
    }

    // Write more test cases for other functions here
}