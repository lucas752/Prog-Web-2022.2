import org.springframework.context.annotation.Bean;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;




@EnableWebSecurity
@Configuration

public class configuration {
	
	
	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		 return http.csrf().disable()
	                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
	                .and().authorizeHttpRequests()
	                .requestMatchers(HttpMethod.POST, "/login")
	                .permitAll()
	                .requestMatchers(HttpMethod.GET, "/home")
	                .permitAll()
	                .anyRequest().authenticated().and().build();
		
	}
	
	
	@Bean
	public AuthenticationManager AuthenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
		return authenticationConfiguration.getAuthenticationManager();
	}
	
	
	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
		
	}
	
	
}
