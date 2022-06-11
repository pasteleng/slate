import time
import board


def run():
    '''
    run()
    > main program routine and entry point
    '''
    print("Hello, world!")


while(True):
    try:
        run()
        time.sleep(0.5)
    except KeyboardInterrupt:
        print('\n!!! keyboard interrupt !!!')
        break
