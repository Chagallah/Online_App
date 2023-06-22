USE [GHospital]
GO

create procedure Insert_FinalOutcome
			@patient_id varchar(50)
           ,@final_outcome int
           ,@other_facility char(50)
           ,@date date
           ,@createdby char(50)
           ,@datecreated datetime
		   as
INSERT INTO [dbo].[FinalOutcome]
           ([patient_id]
           ,[final_outcome]
           ,[other_facility]
           ,[date]
           ,[createdby]
           ,[datecreated])
     VALUES
           (@patient_id
           ,@final_outcome
           ,@other_facility
           ,@date
           ,@createdby 
           ,@datecreated)



