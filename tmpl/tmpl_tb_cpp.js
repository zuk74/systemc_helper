var tmpl_tb_cpp = (function() {/*\
#include "tb.h"

void tb::thread_src()
{
<% for (var i=0; i<signals.length; i++) { %>
<%   if (signals[i].dir == "in" && signals[i].kind == "data" && signals[i].type == "bool") { %>
  <%= signals[i].var_name %>.write( false );
<%   } else if (signals[i].dir == "in" && signals[i].kind == "data") { %>
  <%= signals[i].var_name %>.write( 0 );
<%   } %>
<% } %>
  wait();

  for (int i=0; i<100; i++) {
    wait();
  }
  std::cout << "--- simulation done. ---" << std::endl;

  sc_stop();
}

//void tb::thread_sink()
//{
//  wait();
//
//  while (true)
//  {
<% for (var i=0; i<signals.length; i++) { %>
<%   if (signals[i].dir == "out" && signals[i].kind == "data") { %>
//    <%= signals[i].type %> _<%= signals[i].var_name %> = <%= signals[i].var_name %>.read();
<%   } %>
<% } %>
//    wait();
//  }
//}

*/}).toString().match(/\/\*([^]*)\*\//)[1];
