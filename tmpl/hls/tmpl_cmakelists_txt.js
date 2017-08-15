var tmpl_cmakelists_txt = (function() {/*\
cmake_minimum_required(VERSION 2.8)
SET(CMAKE_COLOR_MAKEFILE ON)
SET(CTEST_COLOR_MAKEFILE ON)

set(SYSTEMC_HOME /opt/systemc/2.3.1)
set(TARGET sim.x)

project(test CXX)

<% if (options.vcd_dump) { %>
add_definitions(-DSYSC_DUMP_VCD_FILE)
<% } %>
include_directories(${SYSTEMC_HOME}/include ./)

if (APPLE)
link_directories(${SYSTEMC_HOME}/lib-macosx64)
endif(APPLE)
if (LINUX)
link_directories(${SYSTEMC_HOME}/lib-linux64)
endif(LINUX)

set(SRCS
    main.cpp
    systop.cpp
    tb.cpp
    <%= module_name %>.cpp
   )

add_executable(${TARGET} ${SRCS})

target_link_libraries(${TARGET} systemc)

*/}).toString().match(/\/\*([^]*)\*\//)[1];
