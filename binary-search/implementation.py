"""
Binary search
""" 
arr = [1,2,3,4,5,6]

goal = 4


def binarySearch(array, target):
  start = 0
  end = len(array)-1
  while(start <=end):
    mid=(start+end)//2
    if(array[mid]==target):
      return mid   
    elif array[mid]<target:
      start = mid + 1
    else:
      end = mid-1
  return -1        


result = binarySearch(arr, goal)

if result !=-1:
  print('Element present at index: {}'.format(result))
else: 
  print('Element not present in the array!')