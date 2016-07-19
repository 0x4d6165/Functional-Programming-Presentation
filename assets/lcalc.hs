module Main (main) where

func1 :: Int
func1 = (+) 1

func2 :: Int -> Int
func2 x = (+) x

func3a :: Int -> Int
func3a x = (-) x
func3b :: (Int -> Int) -> Int -> Int -> Int
func3b f x y = f x y

main :: IO()
main =
  print . show (func1 3)
  print . show (func2 1 2)
  print . show (func3b func3a 4 5)
