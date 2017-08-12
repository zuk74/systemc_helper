var tmpl_usertype_h = (function() {/*#ifndef __<%= struct_name.toUpperCase() %>_H_
#define __<%= struct_name.toUpperCase() %>_H_

#include <systemc.h>

struct <%= struct_name %>
{
<% for (var i=0; i<signals.length; i++) { %>
  <%= signals[i].type %>  <%= signals[i].var_name %>;
<% } %>

  <%= struct_name %>() {
<% for (var i=0; i<signals.length; i++) { %>
    <%= signals[i].var_name %> = <%= signals[i].type == "bool" ? false : "0" %>;
<% } %>
  }

  bool operator == (const <%= struct_name %>& other) const {
    return (
<% for (var i=0; i<signals.length; i++) { %>
<%   if (i==0) { %>
         (<%= signals[i].var_name %> == other.<%= signals[i].var_name %>)
<%   } else { %>
      && (<%= signals[i].var_name %> == other.<%= signals[i].var_name %>)
<%   } %>
<% } %>
    );
  }

  friend ostream& operator < (ostream& os, const <%= struct_name %>& trans) {
    os << "(";
<% for (var i=0; i<signals.length; i++) { %>
<%   if (i==0) { %>
    os << "<%= signals[i].var_name %>" << "=" << trans.<%= signals[i].var_name %> ;
<%   } else { %>
    os << ",<%= signals[i].var_name %>" << "=" << trans.<%= signals[i].var_name %> ;
<%   } %>
<% } %>
    os << ")";
    return os;
  }

  friend void sc_trace(sc_trace_file*& tf, const <%= struct_name %> trans, std::string nm) {
<% for (var i=0; i<signals.length; i++) { %>
    sc_trace( tf, trans.<%=signals[i].var_name %>, nm + ".<%= signals[i].var_name %>" );
<% } %>
  }

};

#endif
*/}).toString().match(/\/\*([^]*)\*\//)[1];
