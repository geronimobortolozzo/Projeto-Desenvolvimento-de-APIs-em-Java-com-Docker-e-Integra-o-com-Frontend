package com.example.usuario_api_mongodb;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface UsuarioRepository  extends MongoRepository<Usuario,String> {
}
