import os
import shutil
def remove():
    rootPath='E:\\angular\\Angular\\angularmodule\\node_modules'
    listRoot = os.listdir(rootPath)
    count = 0
    for dirInRoot in listRoot:
        if(dirInRoot[0:9]=='_@angular'):
            tempPath=os.path.join(rootPath,dirInRoot)
            tempDir = os.listdir(tempPath)[0]
            tempfile = os.path.join(tempPath,tempDir,'package.json')
            if (os.path.isfile(tempfile)):
                print(tempfile)
                shutil.copy(tempfile,tempPath)
                count += 1
    print(count)



if __name__ == '__main__':
    remove()