var tmpl_dut_cpp = (function() {/*
#include "<%= module_name%>.h"

void <%= module_name %>::thread_main()
{
<% for (var i=0; i<signals.length; i++) { %>
<%   if (signals[i].dir == "out" && signals[i].kind == "data" && signals[i].type == "bool") { %>
  <%= signals[i].var_name %>.write( false );
<%   } else if (signals[i].dir == "out" && signals[i].kind == "data") { %>
  <%= signals[i].var_name %>.write( 0 );
<%   } %>
<% } %>
  wait();

  while (true)
  {
    // input
<% for (var i=0; i<signals.length; i++) { %>
<%   if (signals[i].dir == "in" && signals[i].kind == "data") { %>
    //<%= signals[i].type%> _<%= signals[i].var_name %> = <%= signals[i].var_name %>.read();
<%   } %>
<% } %>

    // calc

    // output
<% for (var i=0; i<signals.length; i++) { %>
<%   if (signals[i].dir == "out" && signals[i].kind == "data") { %>
    //<%= signals[i].var_name %>.write( _<%= signals[i].var_name %> );
<%   } %>
<% } %>
    wait();
  }
}

*/}).toString().match(/\/\*([^]*)\*\//)[1];
