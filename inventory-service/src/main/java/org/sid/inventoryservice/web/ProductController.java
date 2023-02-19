package org.sid.inventoryservice.web;

/*
import org.keycloak.KeycloakPrincipal;
import org.keycloak.KeycloakSecurityContext;
import org.keycloak.adapters.springsecurity.token.KeycloakAuthenticationToken;
*/
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Map;

@Controller
public class ProductController {
    @GetMapping("/jwt")
    @ResponseBody
    public Map<String,String> map(HttpServletRequest request){
        //KeycloakAuthenticationToken token = (KeycloakAuthenticationToken)  request.getUserPrincipal();
        //KeycloakPrincipal principal = (KeycloakPrincipal) token.getPrincipal();
        //KeycloakSecurityContext keycloakSecurityContext = principal.getKeycloakSecurityContext();
        Map<String,String> map = new HashMap<>();
        //map.put("access_token",keycloakSecurityContext.getIdTokenString());
        return map;
    }
}
