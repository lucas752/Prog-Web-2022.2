package service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.upe.editais.editaisupe.repositories.IGeneralUserRepository;

@Service
public class AuthenticationService implements UserDetailsService {
	
	@Autowired
	private IGeneralUserRepository iGeneralUserRepository;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		return iGeneralUserRepository.findByEmail(username);
	}
	
}
