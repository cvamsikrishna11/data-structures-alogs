arr = [1,2,3,4,5,6]
goal = 6


def binarySearch(array, target):
  left = 0
  right = len(array)-1
  while(left<=right):
    mid=(left+right)//2 # 0+5 //2 --> 2
    if(array[mid]==target):
      return mid   
    elif array[mid]<target:
      left = mid + 1
    else:
      right = mid-1
  return -1        


result = binarySearch(arr, goal) # index: 5

if result !=-1:
  print('Element present at index: {}'.format(arr[result]))
else: 
  print('Element not present in the array!')