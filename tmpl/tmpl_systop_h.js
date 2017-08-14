var tmpl_systop_h = (function() {/*\
#ifndef __SYSTOP_H_
#define __SYSTOP_H_

#include <systemc.h>
#include "<%= module_name %>.h"
#include "tb.h"

SC_MODULE( systop )
{
<% for (var i=0; i<signals.length; i++) { %>
  <%= signals[i].kind == "clock" ? "sc_clock " : "sc_signal< "+signals[i].type+" >" %> <%= signals[i].var_name %>;
<% } %>


  // instances
  <%= module_name %> i_<%= module_name %>;
  tb i_tb;

  SC_CTOR( systop )
<% for (var i=0; i<signals.length; i++) { %>
    <%= i==0 ? ":" : "," %> <%= signals[i].var_name %>( "<%= signals[i].var_name %>"<%= signals[i].kind == "clock" ? ", 10, SC_NS" : "" %> )
<% } %>
    , i_<%= module_name %>( "i_<%= module_name %>")
    , i_tb( "i_tb" )
  {

<% for (var i=0; i<signals.length; i++) { %>
    i_<%= module_name %>.<%= signals[i].var_name %>( <%= signals[i].var_name %> );
<% } %>

<% for (var i=0; i<signals.length; i++) { %>
    i_tb.<%= signals[i].var_name %>( <%= signals[i].var_name %> );
<% } %>
  }

};

#endif
*/}).toString().match(/\/\*([^]*)\*\//)[1];
