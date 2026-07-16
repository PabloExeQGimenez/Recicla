import { JwtStrategy } from './jwt.strategy';
import { ConfigService } from '@nestjs/config';
import { UnauthorizedException } from '@nestjs/common';

describe('JwtStrategy', () => {
  let strategy: JwtStrategy;
  let mockConfig: jest.Mocked<ConfigService>;

  beforeEach(() => {
    mockConfig = { getOrThrow: jest.fn() } as any;
    mockConfig.getOrThrow.mockReturnValue('test-secret');
    strategy = new JwtStrategy(mockConfig);
  });

  it('debería retornar { id, email, role } con payload válido', async () => {
    const payload = { sub: 'u-1', email: 'test@test.com', role: 'ADMIN' };

    const result = await strategy.validate(payload);

    expect(result).toEqual({
      id: 'u-1',
      email: 'test@test.com',
      role: 'ADMIN',
    });
  });

  it('debería lanzar UnauthorizedException si falta sub', () => {
    const payload = { email: 'test@test.com', role: 'ADMIN' };

    expect(() => strategy.validate(payload as any)).toThrow(
      UnauthorizedException,
    );
    expect(() => strategy.validate(payload as any)).toThrow('Token inválido');
  });

  it('debería lanzar UnauthorizedException si falta email', () => {
    const payload = { sub: 'u-1', role: 'ADMIN' };

    expect(() => strategy.validate(payload as any)).toThrow(
      UnauthorizedException,
    );
  });

  it('debería lanzar UnauthorizedException si falta role', () => {
    const payload = { sub: 'u-1', email: 'test@test.com' };

    expect(() => strategy.validate(payload as any)).toThrow(
      UnauthorizedException,
    );
  });
});
