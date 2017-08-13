var tmpl_main_cpp = (function() {/*
#include <systemc.h>
#include "systop.h"

int sc_main(int argc, char* argv[])
{
  systop i_systop("i_systop");

  sc_start();

  return 0;
}
*/}).toString().match(/\/\*([^]*)\*\//)[1];
