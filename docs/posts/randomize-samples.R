# labels for 120 scinitillation vials, randomize samples into 2 tanks per treatment
# 30 Ambient vials in Ambient-1 , 30 into Ambient-2
# 30 High vials in High-1, 30 in High-2

# load packages
library(tidyverse)

# set working directory
setwd("C:/Users/ssdon/OneDrive/Documents/himb-summer22")

# read in list of 120 vials
scint <- read_csv("data/pae-temp-pool-party.csv")

# vial ID : 
# "colonynumber"-"paetreatmentcode""Ambient/High""tank1/2"

# select vials that end in an "H"
# these are the high temp samples
grepl("^.+(H)$", scint$vial_id)

#####################################################################

# select only ambient samples
ambient <- scint[scint$temp_treatment %in% c("Ambient"), ]  

# remove duplicates using distinct() from dplyr package
distinct.ambient <- ambient %>% distinct(vial_id)

# randomly assign tank 1 or 2, with even distribution
tanks <- c(1, 2)
probs <- c(0.5, 0.5)

# I checked length and reset seed until each tank had exactly 30 samples assigned
# set seed 120 gives 30 & 30!
set.seed(120)
distinct.ambient <- distinct.ambient %>%
  group_by(vial_id) %>% 
  mutate(tank=sample(tanks, size=n(), prob=probs, replace=TRUE)) %>%
  arrange(vial_id) %>%
  print(n=nrow(.))

# check that each tank has exactly 30 samples assigned 
length(which(distinct.ambient$tank == 1))
length(which(distinct.ambient$tank == 2))

########################################################################

# select only high samples
high <- scint[scint$temp_treatment %in% c("High"), ]  

# remove duplicates using distinct() from dplyr package
distinct.high <- high %>% distinct(vial_id)

# randomly assign tank 1 or 2, with even distribution
tanks <- c(1, 2)
probs <- c(0.5, 0.5)

# I checked length and reset seed until each tank had exactly 30 samples assigned
# find a seed other than 120 that also gives 30 & 30...
# set seed 129 gives 30 & 30!
set.seed(129)
distinct.high <- distinct.high %>%
  group_by(vial_id) %>% 
  mutate(tank=sample(tanks, size=n(), prob=probs, replace=TRUE)) %>%
  arrange(vial_id) %>%
  print(n=nrow(.))

# check that each tank has exactly 30 samples assigned 
length(which(distinct.high$tank == 1))
length(which(distinct.high$tank == 2))
