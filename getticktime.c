
#include <stdio.h> 
#include <unistd.h> 

int main()
{
    // 100 on macos
    printf("No. of clock ticks per sec : %ld\n",sysconf(_SC_CLK_TCK));
    return 0;
}