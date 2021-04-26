// for string=> :phone and at ejs =write ejs
// for query => 
//    <a  href="/delete-contact/?id=<%=i._id%>"></a>         for db delete.     


//<ul>
//    <% if(locals.user){ %>
//        <li> <%= user.name %> </li>
//        <li>
//            <a href= "/new/sign-out">Sign out</a>
//        </li>
//    
//    <%} else{ %>
//        <li>
//            <a href="/new/sign-in">Sign in</a>
//        </li>   
//        <li>
//            <a href= "/new/sign-up">Sign up</a>
//        </li> 
        
//      <% } %>  
    
//  </ul>



    
// check if the user is authenticated
//passport.checkAuthentication = function(req, res, next){
        // if the user is signed in, then pass on the request to the next function(controller's action)
//        if (req.isAuthenticated()){
//            return next();
//        }
    
        // if the user is not signed in
//        return res.redirect('/users/sign-in');
//    }
    
//passport.setAuthenticatedUser = function(req, res, next){
//        if (req.isAuthenticated()){
//            // req.user contains the current signed in user from the session cookie and we are just sending this to the locals for the views
//            res.locals.user = req.user;
//        }
    
//        next();
//    }



//<!--<link rel ="stylesheet" href="/css/layout.css"> 
//<html>
//    <head>
//        <title>
//            <%= title %>
        </title>
    </head>
    
    <body>
        <%- include('_header'); -%> 
        <h1>Codeial/xcvcx</h1>  
      <%- include('_footer'); -%>

    </body>
    
</html> ---->


// for home.ejs
<!----
    <div id="posts-list-container">
        <ul>
            <% for(post of posts){ %> 
                 
                <%- include('_post') -%> 
            <%}%>
        </ul>
    </div>

    </section>

    <section id="user-friends">
        <h4>Friends</h4>
        <% for(u of  all_users){%>
            <p>
                <a href="new/profile/<%= u.id %>"><%= u.name %></a>
            </p>
        <%}%>

    </section>
</div>

<script src="../assets/js/home_posts.js"></script>


// for flash

<!----    <% if(flash.success  && flash.success.length >0)  { %>
    <h5>
        <%=flash.success%>  
    </h5>
    <% } %> ---> 


//for noty

    <!-----   <script> 

    <% if(flash.success  && flash.success.length >0){ %>
          
          new Noty({
          type:'success',
          layout:'topRight',
          text:"<%- flash.success -%>",
          timeout: 1500
          }).show();
       
          <% } %>

      </script> --->


      
    <div id="posts-list-container">   
    <ul>
        <% for(post of posts){ %>  
             <li>
                <%= post.content %>  
            </li> 
            <small>
                <%= post.user %>
            </small>
        <%}%>
    </ul>
</div> 





<div id="posts-list-container">   
<ul>
    <% for(post of posts){ %>   
<li>
    <p>
        <% if(locals.user && locals.user.id == post.user.id){ %>   
            <small>
                <a class="delete-post-button" href="/posts/destroy/<%=post.id%>">delete me!!!!</a>
            </small> 
        <%}%>  
         
         
        <%= post.content %>     
        <br>
        <small>
            <%= post.user.name %>  
        </small>
    
    </p>
    
    
    
<div class ="post-comments">   

    <% if(locals.user){%> 
    <form action="/posts/create"  method="POST"> 
        <input type="text"  name="content" placeholder="add comment">
        <input type="hidden" name="post" value="<%= post._id %>"> 
        <input type="submit" value="Add comment">   
    </form> 
    <%}%>
    
    <div class ="post-comments-list"> 
        <ul id = "post-comments-<%= post._id %>">   
            
            
        <% for(comment of post.comments) { %> 
                        
            
                <p>
                    <%= comment.content %> 
                <br>
                <small>
                    <%= comment.user.name %>  
                </small> 
                 
                </p> 
             
            
            <%}%>  
          
            

        </ul>
    </div>
</div>
</li>
<%}%> 



</ul>
</div>
</section>