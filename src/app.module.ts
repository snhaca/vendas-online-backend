/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StateModule } from './state/state.module';
import { CityModule } from './city/city.module';
import { AddressModule } from './address/address.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './guards/roles.guard';  
import { JwtModule } from '@nestjs/jwt';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module'; 
import { PersonModule } from './person/person.module';
import { PersonDocModule } from './person_doc/person_doc.module';
import { PersonAddressModule } from './person_address/person_address.module';
import { PersonContactModule } from './person_contact/person_contact.module';
import { PersonCityModule } from './person_city/person_city.module';
import { CountryModule } from './country/country.module';
import { CartModule } from './cart/cart.module';
import { CartProductModule } from './cart_product/cart_product.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local'],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: process.env.DB_DATABASE,
      host: process.env.DB_HOST,
      password: process.env.DB_PASSWORD,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      entities: [`${__dirname}/**/*.entity{.js,.ts}`],
      migrations: [`${__dirname}/migration/{.ts,*.js}`],
      migrationsRun: true,
    }),
    UserModule,
    StateModule,
    CityModule,
    AddressModule,
    AuthModule,
    JwtModule,
    CategoryModule,
    ProductModule,
    PersonModule,
    PersonDocModule,
    PersonAddressModule,
    PersonContactModule,
    PersonCityModule,
    CountryModule,
    CartModule,
    CartProductModule, 
  ],
  controllers: [ ],
  providers: [
    {
    provide: APP_GUARD,
    useClass: RolesGuard,
    }, 
  ],
})
export class AppModule {}
