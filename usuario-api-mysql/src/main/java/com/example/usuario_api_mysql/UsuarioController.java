package com.example.usuario_api_mysql;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    @Autowired
    private UsuarioRepository repository;

    @PostMapping
    public ResponseEntity<Usuario> create(@RequestBody Usuario u) {
        Usuario saved = repository.save(u);
        return ResponseEntity.ok(saved);
    }

    @GetMapping
    public List<Usuario> all() {
        return repository.findAll();
    }
}
