package service;

import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.util.Date;

import org.springframework.boot.autoconfigure.security.oauth2.resource.OAuth2ResourceServerProperties.Jwt;
import org.springframework.stereotype.Service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.upe.editais.editaisupe.models.GeneralUser;

@Service
public class TokenService {
	public String generateToken(GeneralUser user) {
		return JWT.create()
                .withIssuer("Editais")
                .withSubject(user.getUsername())
                .withClaim("id", user.getId())
                .withExpiresAt(Date.from(LocalDateTime.now()
                        .plusMinutes(30)
                        .toInstant(ZoneOffset.of("-03:00"))))
                .sign(Algorithm.HMAC256("secretWord"));
    }
}
